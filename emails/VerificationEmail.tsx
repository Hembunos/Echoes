import {
  Html,
  Head,
  Font,
  // Preview,
  // Heading,
  // Row,
  // Section,
  // Text,
  // Button,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmC",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
    </Html>
  );
}
