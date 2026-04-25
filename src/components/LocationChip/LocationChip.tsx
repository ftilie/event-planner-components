import { Chip } from "@mui/material";
import { ISO_3166_CODES } from "@/components/LocationChip/CountryCodes";

export type LocationChipProps = {
  location: string;
};

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const countryMap = new Map<string, string>();
for (const code of ISO_3166_CODES) {
  const name = regionNames.of(code);
  if (name) countryMap.set(name.toLowerCase(), code);
}

const getCountryCode = (location: string): string | undefined => {
  return countryMap.get(location.trim().toLowerCase());
};

const LocationChip = ({ location }: LocationChipProps) => {
  const countryCode = getCountryCode(location);
  const label = countryCode ? `${countryCode}, ${location}` : location;

  return <Chip label={label} sx={{ backgroundColor: "var(--color-accent-light)" }} />;
};

export default LocationChip;
