import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'
import store from './Store'

@Module
class GlobalStore extends VuexModule {
  // state
  public title: string = 'Default'

  // mutations
  @Mutation
  private setTitle(title: string) {
    this.title = title
  }
}

export default new GlobalStore({ store, name: 'global-store' })
