import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import AuthHeader from "./authHeader";
import BackButton from "./back-button";
import Social from "./social";
import Style from "./auth.module.css";

interface CardAuthWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  headerDescription: string;
  authTypeHref: string;
  authTypeLabel: string;
  showSocial?: boolean;
}

export default function CardAuthWrapper({ children, headerTitle, headerDescription, authTypeHref, authTypeLabel, showSocial }: CardAuthWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <AuthHeader title={headerTitle} description={headerDescription} />
      </CardHeader>
      <CardContent>
        {children}
        <p className={`text-center mt-4 ${Style.seperate}`}>OR</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        {showSocial && <Social />}
        <BackButton href={authTypeHref} label={authTypeLabel} />
      </CardFooter>
    </Card>
  );
}
