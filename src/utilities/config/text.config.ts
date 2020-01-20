// components data
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

// Components Text
export const criteriaText = {
  datePickerLabelText: "Födelse av ditt barn",
  employeeStatusLabelText: "Jag är en sammanhängande anställning på Dynabyte i"
};

export const priceBaseText = {
  durationLabelText: "Datum",
  durationStartBatePlaceholder: "Start Datum",
  durationEndBatePlaceholder: "Slut Datum",
  basicAmountLabelText: "Basbelopp för"
};

export const salaryInfoText = {
  salaryModelLabelText: "Lönemodell",
  baseSalaryLabeText: "Grundlön"
};

export const cardText = {
  max10PBB: "Max 10 PBB 10%:",
  max15PBB: "Max 15 PBB 90%:",
  excessFixedSalary: "Överskjutande fast lön:",
  parentalSalaryUpto10PBB: "Föräldralön upp till 10 PBB:",
  parentalSalaryAbove10PBB: "Föräldralön över 10 PBB:",
  monthlyTotal: "Total föräldralön/mån:"
};

// Help and errors messages
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
  birthdayIsRequired: "Barn födelsedag fält krävs",
  startDateIsRequired: "Start datum är krävs",
  endDateIsRequired: "slut datum är krävs"
};

export const hintMessages = {
  ...sharedMessages,
  employeeStatus: `För att ta del av Dynabytes föräldralönsersättning behöver du ha haft 
  en sammanhängande anställning på Dynabyte i mer än ett år.`,
  changePBB: "Du kan redigera PBB genom att aktivera fältet"
};
