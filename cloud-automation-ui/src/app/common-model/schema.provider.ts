export const ExternalDependency = {
                                    destinationLbl:{
                                      type: 'label',
                                      value: "List IPs to open firewall access to:"
                                    },
                                    destinations: {
                                      type: 'array',
                                      value: {
                                        address:{
                                          type: 'text',
                                          value:'',
                                          label:'IP address',
                                          validation:{
                                            required: false
                                          }
                                        },
                                        portStart:{
                                          type: 'text',
                                          value:0,
                                          label:'Port Start',
                                        },
                                        portEnd:{
                                          type: 'text',
                                          value:'',
                                          label:'IP address',
                                        },
                                        portocol:{
                                          type: 'select',
                                          value:'tcp',
                                          label:'Protocol',
                                          options: [
                                            {label: 'TCP', value: 'tcp'},
                                            {label: 'UDP', value: 'udp'}
                                          ]
                                        }
                                      }
                                    },
                                    addIp:{
                                      type: 'button',
                                      value:'Add IP',
                                      label:'Add IP',
                                      class: 'btn btn-danger split',
                                      actionFor: 'destinations'
                                    },
                                    removeIp:{
                                      type: 'button',
                                      value:'Remove IP',
                                      label:'Remove IP',
                                      class: 'btn btn-danger split',
                                      actionFor: 'destinations'
                                    },
                                    passwordLabel:{
                                      type: 'label',
                                      value:'List password',
                                    },
                                    password: {
                                      type: 'array',
                                      value: {
                                        name:{
                                          type: 'text',
                                          value:'',
                                          label:'Name',
                                          validation:{
                                            required: false
                                          }
                                        },
                                        value:{
                                          type: 'V',
                                          value:0,
                                          label:'Value',
                                        },
                                        credentialType:{
                                          type: 'select',
                                          value:'PUBLIC',
                                          label:'Credential Type',
                                          options: [
                                            {label: 'PUBLIC', value: 'PUBLIC'},
                                            {label: 'SECRET', value: 'SECRET'}
                                          ]
                                        },
                                        credentialStatus:{
                                          type: 'select',
                                          value:'PLAIN',
                                          label:'Credential Status',
                                          options: [
                                            {label: 'PLAIN', value: 'PLAIN'},
                                            {label: 'ENCRYPTED', value: 'ENCRYPTED'}
                                          ]
                                        }
                                      }
                                    },
                                    addCustomCredential:{
                                      type: 'button',
                                      value:'Add Credential',
                                      label:'Add Credential',
                                      class: 'btn btn-danger split',
                                      actionFor: 'password'
                                    },
                                    removeCustomCredential:{
                                      type: 'button',
                                      value:'Remove Credential',
                                      label:'Remove Credential',
                                      class: 'btn btn-danger split',
                                      actionFor: 'password'
                                    },
                                    vaultCredLbl:{
                                      type: 'label',
                                      value:'List EVP-AIM credentils',
                                    },
                                    vaultCredentials: {
                                      type: 'array',
                                      value: {
                                        objectName:{
                                          type: 'text',
                                          value:'',
                                          label:'Object Name',
                                          validation:{
                                            required: false
                                          }
                                        },
                                        userName:{
                                          type: 'text',
                                          value:'',
                                          label:'Username',
                                        },
                                        appId:{
                                          type: 'text',
                                          value:'',
                                          label:'APP ID',
                                        },
                                        safeName:{
                                          type: 'text',
                                          value:'',
                                          label:'Safe Name',
                                        }
                                      }
                                    },
                                    addVaultCredentials:{
                                      type: 'button',
                                      value:'Add Credential',
                                      label:'Add Credential',
                                      class: 'btn btn-danger split',
                                      actionFor: 'vaultCredentials'
                                    },
                                    removeVaultCredentials:{
                                      type: 'button',
                                      value:'Remove Credential',
                                      label:'Remove Credential',
                                      class: 'btn btn-danger split',
                                      actionFor: 'vaultCredentials'
                                    }

                                  }

export const Janus = {
                        janusEnv:{
                          type: 'select',
                          value:'',
                          label:'Janus environment',
                          options: [
                            {label: 'SIT', value: 'SIT'},
                            {label: 'QA', value: 'QA'},
                            {label: 'PROD', value: 'PROD'}
                          ]
                        },
                        applicationId:{
                          type: 'text',
                          value:'',
                          label:'Application ID',
                          validation:{
                            required: false
                          }
                        },
                        systemId:{
                          type: 'text',
                          value:'',
                          label:'System ID',
                          validation:{
                            required: false
                          }
                        },
                        entitlementId:{
                          type: 'text',
                          value:'',
                          label:'Entitlement ID',
                          validation:{
                            required: false
                          }
                        },
                        securityLevel:{
                          type: 'text',
                          value:'',
                          label:'System ID',
                          validation:{
                            required: false
                          }
                        },
                        sessionTimeout:{
                          type: 'text',
                          value:'',
                          label:'Session Timeout',
                          validation:{
                            required: false
                          }
                        },
                        activityTimeout:{
                          type: 'text',
                          value:'',
                          label:'Activity timeout',
                          validation:{
                            required: false
                          }
                        },
                        trustLevel:{
                          type: 'text',
                          value:'',
                          label:'Trust Level',
                          validation:{
                            required: false
                          }
                        },
                        licenseKey:{
                          type: 'text',
                          value:'',
                          label:'License Key',
                          validation:{
                            required: false
                          }
                        },
                        adFederate:{
                          type: 'text',
                          value:'',
                          label:'AdFederate',
                          validation:{
                            required: false
                          }
                        },
                        attributes:{
                          type: 'array',
                          label:'Attributes',
                          initialSize: 1,
                          value:{
                            id:{
                              type: 'checkbox',
                              value:'false',
                              label:'Attributes',
                              option: [
                                {label: 'id'}
                              ]
                            }
                          }
                        },
}
