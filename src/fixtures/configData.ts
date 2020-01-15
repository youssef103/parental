export const salaryModels = [
  { value: "", text: "Välj din lönemodell" },
  { value: "1", text: "Rörlig" },
  { value: "2", text: "Stabil" }
];

export const employeeStatus = [
  { value: "", text: "Välj värdet från listan" },
  { value: "1", text: "mer än ett år" },
  { value: "2", text: "mer än tre år" }
];

const sharedMessages = {
  period:
    "Din föräldraledighet måste tas ut inom 24 månader efter barnets födelse eller adoption.",
  minPeriod: "Perioden måste vara mer än 30 dagar.",
  minSalary: "Lönen måste vara minst 30000 kr"
};

export const errorMessages = {
  ...sharedMessages,
  NotFoundPBB: "Tyvärr kunde inte hitta PBB för "
};

export const hintMessages = {
  ...sharedMessages,
  employeeStatus: `För att ta del av Dynabytes föräldralönsersättning behöver du ha haft 
  en sammanhängande anställning på Dynabyte i mer än ett år.`,
  changePBB: "Du kan redigera PBB genom att aktivera fältet"
};
