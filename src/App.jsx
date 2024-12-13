import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

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

  function handleSelectedProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectsState.selectedProjectId}
      ></Sidebar>
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected
          onStartAddProject={handleStartAddProject}
        ></NoProjectSelected>
      )}
      {projectsState.selectedProjectId === null && (
        <NewProject onAddProject={handleAddProject}></NewProject>
      )}
      {projectsState.selectedProjectId && (
        <SelectedProject
          project={projectsState.projects.find(
            (project) => project.id === projectsState.selectedProjectId
          )}
        ></SelectedProject>
      )}
    </main>
  );
}

export default App;
