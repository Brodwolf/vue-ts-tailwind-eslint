import SessionPayload from '@/interfaces/SessionPayload'
import { getPayload } from './SessionUtils'

export default class Session {
  private payload: SessionPayload

  public constructor () {
    this.payload = getPayload()
  }

  /**
   * Retorna o ID do cliente logado
   */
  public getCustomerId (): number {
    return Number(this.payload.ent)
  }

  /**
   * Retorna o ID do usuário logado
   */
  public getUserId (): number {
    return Number(this.payload.usr)
  }

  /**
   * Retorna o nome do usuário logado
   */
  public getUsername (): string {
    return decodeURIComponent(this.payload.u_n)
  }

  /**
   * Retorna se o usuário logado é administrador
   */
  public isAdministrador (): boolean {
    return Boolean(this.payload.is_t)
  }
}

export const useSession = () => new Session()
