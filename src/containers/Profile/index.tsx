import DashboardWrapper from "@/components/common/DashboardWrapper";
import TextWithEdit from "@/components/common/TextWithEdit";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";

type Props = {};

const socialContacts = [
  {
    title: "LinkedIn",
    value: <TextWithEdit text="linkedin.com/in/abdullah" />,
  },
  {
    title: "GitHub",
    value: <TextWithEdit text="github.com/abdullah" />,
  },
  {
    title: "Fiverr",
    value: <TextWithEdit text="fiverr.com/abdullah" />,
  },
  {
    title: "Upwork",
    value: <TextWithEdit text="upwork.com/~abdullah" />,
  },
  {
    title: "Phone",
    value: <TextWithEdit text="+1 234 567 8900" />,
  },
  {
    title: "Email",
    value: <TextWithEdit text="abdullah@gmail.com" />,
  },
  {
    title: "Twitter",
    value: <TextWithEdit text="twitter.com/abdullah" />,
  },
  {
    title: "Facebook",
    value: <TextWithEdit text="facebook.com/abdullah" />,
  },
  {
    title: "Instagram",
    value: <TextWithEdit text="instagram.com/abdullah" />,
  },
];

const descriptionMapper = [
  {
    title: "Name",
    value: <TextWithEdit text="Muhammad Abdullah" />,
  },
  {
    title: "Stack Titles",
    value: (
      <TextWithEdit text="GenerateAI Developer, Next.js Expert, Backend Engineer, Frontend Wizard, Cloud Innovator" />
    ),
  },
  {
    title: "Skills",
    value: (
      <TextWithEdit text="HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Docker, Kubernetes, AWS, Azure, GCP" />
    ),
  },
  {
    title: "Social Contacts",
    value: (
      <div className="overflow-hidden  rounded-lg border border-border bg-background">
        <Table className="w-full">
          <TableBody>
            {socialContacts.map((contact) => (
              <TableRow
                key={contact.title}
                className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
              >
                <TableCell className="bg-muted/50 py-2 font-medium">
                  {contact.title}
                </TableCell>
                <TableCell className="py-2">{contact.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    ),
  },
];

const ProfileContainer = (props: Props) => {
  return (
    <DashboardWrapper className="flex flex-col gap-5">
      <h1 className="dashboard-h1">Profile</h1>

      <ContextMenu>
        <ContextMenuTrigger className="w-fit">
          <div className="relative w-24 h-24 rounded-full group">
            <div className="relative w-full h-full">
              <Image
                alt="Profile picture"
                src="/me.jpg"
                className="rounded-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                fill
                priority
              />
              <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Change Photo</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <div className="flex flex-col gap-4">
        {descriptionMapper?.map((i) => {
          return (
            <div key={i.title} className="flex w-full pt-4">
              <h5 className="max-w-[150px] lg:max-w-[250px] w-full text-sm font-semibold text-gray-700">
                {i.title}
              </h5>
              <div className="flex-1">
                {typeof i.value === "string" ? <p>{i?.value}</p> : i?.value}
              </div>
              {/* <div className="flex flex-1 gap-4 items-center w-full">
                    <p>Muhammad Abdullah</p>
                  </div> */}
            </div>
          );
        })}
      </div>
    </DashboardWrapper>
  );
};

export default ProfileContainer;
