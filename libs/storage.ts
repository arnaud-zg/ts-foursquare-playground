interface ICredentials {
  clientId: string
  clientSecret: string
}

export const getClientCredentials = (): ICredentials => ({
  clientId: localStorage.getItem('clientId') || '',
  clientSecret: localStorage.getItem('clientSecret') || '',
})

export const saveClientCredentials = ({
  clientId,
  clientSecret,
}: ICredentials) => {
  localStorage.setItem('clientId', clientId)
  localStorage.setItem('clientSecret', clientSecret)
}
