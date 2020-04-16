export class Routes {
  static TO_NOT_FOUND = "TO_NOT_FOUND";
  static CLEAR_ROUTE = "CLEAR_ROUTE";
  static setRoute = (route) => ({
    type: Routes.TO_NOT_FOUND,
    route,
  });

  static clearRoute = () => ({
    type: Routes.CLEAR_ROUTE,
    route: null,
  });
}
