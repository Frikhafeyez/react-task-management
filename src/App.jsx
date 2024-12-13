import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

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
        selectedProjectId: undefined,
        projects: prevState.projects.concat({
          id: crypto.randomUUID(),
          ...projectData,
        }),
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      ></Sidebar>
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
