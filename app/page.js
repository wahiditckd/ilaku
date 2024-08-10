"use client"
import CustomAccordion from "@/components/global/CustomAccordion";
import { testApi } from "@/lib/services";
import { useQuery } from "@tanstack/react-query"

export default function Home() {
	const queryTest = useQuery({
		queryKey: ["qtest"],
		queryFn: testApi
	})
	
	if(queryTest.isLoading) {
		return (
			<div>Loaidng....</div>
		)
	}

	if(queryTest.error) {
		return (
			<div>Error</div>
		)
	}

	const dataContent = queryTest?.data

	// Lihat console
	console.log(dataContent)
	return (
		<main className="bg-blue-200 text-white">
			<div className="wrapper">
				<div className="text-3xl font-bold underline flex flex-col h-[calc(100vh-70px)] w-full py-10">
					<h1 className="mb-7">Hello wording ini dari API: {dataContent?.message}</h1>
					<CustomAccordion/>
				</div>		
			</div>
		</main>
	);
}
