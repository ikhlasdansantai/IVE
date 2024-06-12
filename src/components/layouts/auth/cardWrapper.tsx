import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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

export default function CardAuthWrapper({
  children,
  headerTitle,
  headerDescription,
  authTypeHref,
  authTypeLabel,
  showSocial,
}: CardAuthWrapperProps) {
  return (
    <Card className="mx-4 w-full shadow-md sm:mx-0 sm:w-[400px]">
      <CardHeader>
        <AuthHeader title={headerTitle} description={headerDescription} />
      </CardHeader>
      <CardContent>
        {children}
        <p className={`mt-4 text-center ${Style.seperate}`}>OR</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        {showSocial && <Social />}
        <BackButton href={authTypeHref} label={authTypeLabel} />
      </CardFooter>
    </Card>
  );
}
