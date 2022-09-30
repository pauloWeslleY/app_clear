import { AppRoutes } from "./routes/app_routes";
import { BackToTopButton } from "./components/BackToTopButton";

function App() {
   return (
      <section>
         <AppRoutes />
         <BackToTopButton />
      </section>
   );
}

export default App;
