import React, {useState, createContext, Dispatch, SetStateAction} from 'react'

type TTest = {
    test1: string;
    test2: boolean;
}

type TTestContext = {
    testState: TTest,
    setTestState: React.Dispatch<React.SetStateAction<TTest>>
}

const testInitialState: TTest = {
    test1: 'test',
    test2: true
}

export const TestContext = createContext({} as TTestContext)
export const TestProvider = TestContext.Provider

export const Provider: React.FC =
    ({children}) => {
    const [testState, setTestState] = useState(testInitialState)

    return (
        <TestProvider value={{ testState, setTestState }}>
            {children}
        </TestProvider>
    )
}