import Api from './Api'

export default class ExampleApi extends Api {
  public constructor () {
    super(process.env.EXAMPLE_API_URL ?? 'http://localhost:8889')
  }
}

export const useExampleApi = () => new ExampleApi()
