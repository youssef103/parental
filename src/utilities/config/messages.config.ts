export const salaryModels = [
  { value: "", text: "Välj din lönemodell" },
  { value: "Rörlig", text: "Rörlig" },
  { value: "Stabil", text: "Stabil" }
];

export const employeeStatus = [
  { value: "", text: "Välj värdet från listan" },
  { value: "mer än ett år", text: "mer än ett år" },
  { value: "mer än tre år", text: "mer än tre år" }
];

const sharedMessages = {
  period:
    "Din föräldraledighet måste tas ut inom 24 månader efter barnets födelse eller adoption.",
  minPeriod: "Perioden måste vara mer än 30 dagar.",
  minSalary: "Lönen måste vara minst 30000 kr"
};

export const errorMessages = {
  ...sharedMessages,
  notFoundPBB: "Tyvärr kunde inte hitta PBB för ",
  statusIsRequired: "Välj värdet från listan.",
  birthdayIsRequired: "Barn födelsedag fält krävs"
};

export const hintMessages = {
  ...sharedMessages,
  employeeStatus: `För att ta del av Dynabytes föräldralönsersättning behöver du ha haft 
  en sammanhängande anställning på Dynabyte i mer än ett år.`,
  changePBB: "Du kan redigera PBB genom att aktivera fältet"
};
