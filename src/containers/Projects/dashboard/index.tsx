import DashboardWrapper from "@/components/common/DashboardWrapper";
import JsonTable, { JsonTableColumns } from "@/components/common/JsonTable";


const mockProjectColumns: JsonTableColumns<(typeof mockProjectData)[0]> = [
  {
    title: "Project Name",
    dataIndex: "name",
    align: "start",
    width: 200,
  },
  {
    title: "Description",
    dataIndex: "description",
    align: "start",
    width: 300,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    align: "end",
    width: 150,
    render: (item: { createdAt: string }) =>
      new Date(item.createdAt).toLocaleDateString(),
  },
];

const mockProjectData = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "Building a modern e-commerce solution with React and Node.js",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description:
      "Creating a cross-platform mobile application using React Native",
    createdAt: "2024-01-20",
  },
  {
    id: 3,
    name: "Legacy System Migration",
    description: "Migrating old PHP system to modern tech stack",
    createdAt: "2024-01-25",
  },
];

const ProjectsDashboardContainer = () => {
  return (
    <DashboardWrapper>
      <h1 className="dashboard-h1 mb-10">Projects</h1>
      <JsonTable columns={mockProjectColumns} data={mockProjectData} />
    </DashboardWrapper>
  );
};

export default ProjectsDashboardContainer;
