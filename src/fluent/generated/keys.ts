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
                    package_json: {
                        table: 'sys_module'
                        id: '19c2436d9b7c4821bbf88eb6deadfcdf'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '1568cd362db34dcc896b31409026530a'
                    }
                }
            }
        }
    }
}
