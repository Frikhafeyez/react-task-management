import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  console.log(projectsState.projects);

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.concat({ id: uuidv4(), ...projectData }),
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject}></Sidebar>
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected
          onStartAddProject={handleStartAddProject}
        ></NoProjectSelected>
      )}
      {projectsState.selectedProjectId === null && (
        <NewProject onAddProject={handleAddProject}></NewProject>
      )}
    </main>
  );
}

export default App;
