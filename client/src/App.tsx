import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Price from "@/pages/Price";
import R360 from "@/pages/R360";
import AboutUs from "@/pages/AboutUs";
import Alpha from "@/pages/Alpha";
import Login from "@/pages/Login";
/* import { ContactDialogProvider } from "./components/ContactDialogContext";
import ContactDialog from "./components/ContactDialog"; */

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Price} />
      <Route path="/360" component={R360} />
      <Route path="/signup" component={Alpha} />
      <Route path="/login" component={Login} />
      {/* <Route path="/about" component={AboutUs} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
     {/*  <ContactDialogProvider> */}
        <Router />
        <Toaster />
       {/*  <ContactDialog /> */}
     {/*  </ContactDialogProvider> */}
    </>
  );
}

export default App;
