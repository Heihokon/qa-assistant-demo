import FlagshipProvider, { Flagship } from "@flagship.io/react-sdk";
import { ReactNode } from "react";

export async function FsProvider({ children }: { children: ReactNode }) {
  const envId = process.env.NEXT_PUBLIC_FS_ENV_ID as string;
  const apiKey = process.env.NEXT_PUBLIC_FS_API_KEY as string;
  Flagship.start(envId, apiKey);

  const visitorId = "visitorId-1";

  const visitor = Flagship.newVisitor({ visitorId, hasConsented: true });

  await visitor.fetchFlags();

  return (
    <FlagshipProvider
      envId={envId}
      apiKey={apiKey}
      visitorData={{
        id: visitor.visitorId,
        context: visitor.context,
        hasConsented: true,
      }}
      initialFlagsData={visitor.getFlagsDataArray()}
    >
      {children}
    </FlagshipProvider>
  );
}
