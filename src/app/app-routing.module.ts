import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LostComponent } from './lost/lost.component';

/**
 * Route interface with all options
 *
    interface Route {
      path : string - path is a string that uses the route matcher DSL.
      pathMatch : string - pathMatch is a string that specifies the matching strategy.
      matcher : UrlMatcher - matcher defines a custom strategy for path matching and supersedes path and pathMatch. See UrlMatcher for more info.
      component : Type<any> - component is a component type.
      redirectTo : string - redirectTo is the url fragment which will replace the current matched segment.
      outlet : string - outlet is the name of the outlet the component should be placed into.
      canActivate : any[] - canActivate is an array of DI tokens used to look up CanActivate handlers. See CanActivate for more info.
      canActivateChild : any[] - canActivateChild is an array of DI tokens used to look up CanActivateChild handlers. See CanActivateChild for more info.
      canDeactivate : any[] - canDeactivate is an array of DI tokens used to look up CanDeactivate handlers. See CanDeactivate for more info.
      canLoad : any[] - canLoad is an array of DI tokens used to look up CanDeactivate handlers. See CanLoad for more info.
      data : Data - data is additional data provided to the component via ActivatedRoute.
      resolve : ResolveData - resolve is a map of DI tokens used to look up data resolvers. See Resolve for more info.
      children : Routes - runGuardsAndResolvers defines when guards and resovlers will be run. By default they run only when the matrix parameters of the route change. When set to paramsOrQueryParamsChange they will also run when query params change. And when set to always, they will run every time.
      loadChildren : LoadChildren - children is an array of child route definitions.
      runGuardsAndResolvers : RunGuardsAndResolvers - loadChildren is a reference to lazy loaded child routes. See LoadChildren for more info.
    }
*/

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: '**',
    component: LostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
