import { useState, useContext, createContext, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

type PrecureProviderType = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  after: string;
  setAfter: Dispatch<SetStateAction<Date>>;
  before: string;
  setBefore: Dispatch<SetStateAction<Date>>;
  seriesId: string;
  setSeriesId: Dispatch<SetStateAction<string>>;
  enquiry: string;
  setEnquiry: Dispatch<SetStateAction<string>>;
};
const precureContext = createContext<any>({});
const usePrecure = () => useContext<PrecureProviderType>(precureContext);

const PrecureProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<string>("");
  const [after, setAfter] = useState<Date>();
  const [before, setBefore] = useState<Date>();
  const [seriesId, setSeriesId] = useState<string>("");
  const [enquiry, setEnquiry] = useState<string>("");
  const value = {
    color,
    setColor,
    after,
    setAfter,
    before,
    setBefore,
    seriesId,
    setSeriesId,
    enquiry,
    setEnquiry,
  };
  return <precureContext.Provider value={value}>{children}</precureContext.Provider>;
};

export { usePrecure, PrecureProvider };
