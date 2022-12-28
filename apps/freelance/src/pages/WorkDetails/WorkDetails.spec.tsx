import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { render, screen } from "utils/tests/test";
import { mockJobData } from "utils/tests/mocks/jobMockData";
import { jobIds } from "utils/tests/testsIds/jobDetailsIds";

import WorkDetails from "./index";

jest.mock("redux/jobs/jobs.api", () => ({
	useGetJobIdQuery: () => ({ data: mockJobData, isLoading: false }),
}));

describe("Component WorkDetails renders all data from server", () => {
	let container: Element;

	beforeAll(() => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation(query => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(),
				removeListener: jest.fn(),
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});

	beforeEach(() => {
		container = document.createElement("div");

		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
	});
	test("Component render successfully", () => {
		const page = act(() => {
			render(<WorkDetails />);
		});

		expect(page).toBeTruthy();
	});

	test("Job data renders correctly", async () => {
		act(() => {
			render(<WorkDetails />);
		});

		expect((await screen.findByTestId(jobIds.employmentType)).textContent).toBe(
			`${mockJobData.employmentType}`,
		);

		expect((await screen.findByTestId(jobIds.createdDate)).textContent).toBe(
			`${mockJobData.createdDate}`,
		);

		expect((await screen.findByTestId(jobIds.availableAmountOfHours)).textContent).toBe(
			`${mockJobData.availableAmountOfHours}`,
		);

		expect((await screen.findByTestId(jobIds.hourRate)).textContent).toBe(
			`${mockJobData.hourRate}`,
		);

		expect((await screen.findByTestId(jobIds.englishLevel)).textContent).toBe(
			`${mockJobData.englishLevel}`,
		);

		expect((await screen.findByTestId(jobIds.workExperience)).textContent).toBe(
			`${mockJobData.workExperience}`,
		);

		expect((await screen.findByTestId(jobIds.description)).textContent).toBe(
			`${mockJobData.description}`,
		);

		expect((await screen.findByTestId(jobIds.otherRequirenments)).textContent).toBe(
			`${mockJobData.otherRequirenments}`,
		);
	});

	test("Array`s object data is correct", () => {
		act(() => {
			render(<WorkDetails />);
		});

		expect(mockJobData.skills).toEqual(
			expect.arrayContaining([expect.objectContaining({ id: "1", name: "Java" })]),
		);
	});

	test("Employer`s profile data is correct", () => {
		act(() => {
			render(<WorkDetails />);
		});

		expect(mockJobData.employer).toEqual(
			expect.objectContaining({
				id: "2",
				fullName: "Ksenia Komisarova",
				companyName: "IT",
				position: "HR",
				phone: "04433992020",

				linkedIn: "linkedin.com",
				website: "www.mysite.com",

				aboutUs: "Description of a company",
				image: "url/image",
			}),
		);
	});

	test("Image correctly displayed", async () => {
		act(() => {
			render(<WorkDetails />);
		});

		expect(await screen.findByTestId(jobIds.img)).toBeVisible();
	});
});
