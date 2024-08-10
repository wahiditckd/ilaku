"use client"
import CatalogHeader from "@/components/header/CatalogHeader";
import "./globals.css";
import CatalogFooter from "@/components/footer/CatalogFooter";
import BaseContent from "@/components/global/BaseContent";


export default function RootLayout({ children }) {
return (
	<html lang="en">
		<body suppressHydrationWarning={true}>
			<BaseContent>
				<CatalogHeader/>
				{children}
				<CatalogFooter/>
			</BaseContent>
		</body>
	</html>
);
}
