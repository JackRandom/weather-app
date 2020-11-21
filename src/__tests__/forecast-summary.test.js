import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/forecastSummary";


describe("ForecastSummary", () => {

  it("renders correctly", () => {
    const { asFragment } = render(
      
      <ForecastSummary
        date={1525046400000}
        temperature="mockTemperature"
        description="mockDescription"
        icon="800"
        handleForecastSelect={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

it("renders the correct props", () => {
    const { getByTestId} = render(
      <ForecastSummary
        date={1525046400000}
        temperature="mockTemperature"
        description="mockDescription"
        icon="800"
        handleForecastSelect={() => {}}
      />
    );
//handleForecastSelect test

    expect(getByTestId("date-id")).toHaveClass("forecast-summary__date");
    expect(getByTestId("temperature-id")).toHaveClass("forecast-summary__temperature");
    expect(getByTestId("description-id")).toHaveClass("forecast-summary__description");
    expect(getByTestId("icon-id")).toHaveClass("forecast-summary__icon");
  });
});