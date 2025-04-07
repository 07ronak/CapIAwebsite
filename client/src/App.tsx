import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Price from "@/pages/Price";
import R360 from "@/pages/R360";
import AboutUs from "@/pages/AboutUs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Price} />
      <Route path="/360" component={R360} />
      {/* <Route path="/about" component={AboutUs} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
