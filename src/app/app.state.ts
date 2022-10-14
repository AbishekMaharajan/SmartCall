
import { AuthState } from './auth/reducer/auth.state';
import { DidState } from './pages/did/reducer/did.state';
import { ProjectsState } from './pages/projects/reducer/projects.state';
import { UsersState } from './pages/users/reducer/users.state';
import { LiveMoniterState } from './pages/live-moniter/reducer/liveMoniter.state';
import { CustomersState } from './pages/customers/reducer/customers.state';
import { CommonState } from './common/reducer/common.state';
export interface AppState {
    auth: AuthState;
    projects: ProjectsState;
    did: DidState
    users: UsersState
    liveMoniter: LiveMoniterState
    customer: CustomersState
    common: CommonState
}
