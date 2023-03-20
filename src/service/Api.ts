import axios from 'axios'
import { getToken } from '@/utils/SessionUtils'

export default abstract class Api {
  // eslint-disable-next-line no-useless-constructor
  public constructor (private url: string) {}

  private get axios () {
    return axios.create({
      baseURL: this.url,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }

  /**
   * Chama um método GET
   */
  public async callGet<R> (endpoint: string) {
    return await this.axios.get<R>(endpoint)
  }

  /**
   * Chama um método DELETE
   */
  public async callDelete (endpoint: string) {
    return await this.axios.delete(endpoint)
  }

  /**
   * Chama um método POST
   */
  public async callPost<R, D> (endpoint: string, data: D) {
    return await this.axios.post<R>(endpoint, data)
  }

  /**
   * Chama um método PUT
   */
  public async callPut<R, D> (endpoint: string, data: D) {
    return await this.axios.put<R>(endpoint, data)
  }
}
