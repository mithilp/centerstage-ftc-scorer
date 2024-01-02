import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "FTC CENTERSTAGE Score Calculator",
	description:
		"Calculate your scores for the FTC CENTERSTAGE robot game. Practice like never before with this beautiful, easy-to-use calculator.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
				/>
				<Script id="google-analytics">
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.GTAG}');
        `}
				</Script>
			</head>
			<body className={font.className}>{children}</body>
		</html>
	);
}
