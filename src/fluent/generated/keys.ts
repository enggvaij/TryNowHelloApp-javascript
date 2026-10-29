import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '8689932d0d2344ba90c47992e1fc6b22'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '3a4329407c6f4d25bdac14bd3eef962d'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'fc6b45dab90642f38c32dff96ee17f8b'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: '6b54908f72f842768bde69feec92672d'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: '6c133e61cf9b4862a323a1681e99ebec'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '19c2436d9b7c4821bbf88eb6deadfcdf'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '1568cd362db34dcc896b31409026530a'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '02c9b0af3d5b4d08a09ecf2ce0d07409'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'deadline'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '118ea9ce9e0e48308f3e86af7b5bb861'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'matrix'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '268ab5f5b81143b78d19c88fc983ca49'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c4b8829b7654ebb846741a7c9105535'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'deadline'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f691f1371be460d936142c55fe1f50c'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'matrix'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3fc0534e7aad44e9ab2794dfa8042f4c'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5aca6a5b56f041cda6bb7f1e309afa6d'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a2cace43de674886b55d43a07d5eabf4'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b7197555471d46139d3d2ee138587392'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'matrix'
                            value: 'decide'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'be929f72f9f04af1b098ea5750149b41'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c7da83cab79c4a97b63f028d29bc19b0'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'matrix'
                            value: 'delete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cc8ad002a625459ea994fdec1c34ef9c'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'matrix'
                            value: 'do'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0228ba3145347ecaec8fe1472087dd4'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'matrix'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f10f53bda20f4f58af37d331cf4a7619'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4f69a6bcb90429094d5d8dae0a05caa'
                        key: {
                            name: 'x_2287848_hellonow_to_do'
                            element: 'matrix'
                            value: 'delegate'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
