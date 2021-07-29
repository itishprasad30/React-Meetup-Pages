import Todo from "./Components/Todo";
import { Route, Switch } from "react-router-dom";
import AllFavorites from "./Pages/AllFavorites";
import NewMeetUps from "./Pages/NewMeetUps";
import AllTodos from "./Pages/AllTodos";
import Layout from "./Components/Layouts/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllFavorites />
        </Route>
        <Route path="/newmeetings">
          <NewMeetUps />
        </Route>
        <Route path="/todos">
          <AllTodos />
        </Route>
        <Route path="/mytodos">
          <h1>My Todos All</h1>
          <Todo text="helo" />
          <Todo text="some thing" />
          <Todo text="some thing never" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

// {
//   /* <Switch>
//   <Route path="/">
//     <AllFavorites />
//   </Route>
//   <Route path="newmeetups">
//     <NewMeetUps />
//   </Route>
//   <Route path="alltodos">
//     <AllTodos />
//   </Route>

// </Switch>; */
// }
