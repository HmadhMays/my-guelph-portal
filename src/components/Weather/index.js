import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { FaCloudSunRain } from "react-icons/fa";


export default function Weather(props) {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '29dd21d90471c801beead948844acbae',
        // key: '8ebf4e31d9d23805557a9eaa7263bc83',
        lat: '43.5344277',
        lon: '-80.2751873',
        // forecast: "today",
        // city: "guelph",
        type: "auto",
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3 p-0 flex-widget">
            <div className="widget-card" style={{ borderColor: "#0181c2" }}>
                <div className="widget-card-body">
                    <div className="widget-card-header">
                        <div className="widget-card-header-icon" style={{ background: "#0181c2" }}>
                            <FaCloudSunRain />
                        </div>
                        <h3>Weather</h3>
                    </div>
                    <div className="widget-card-content" style={{ padding: "0px" }}>
                        {<ReactWeather
                            isLoading={isLoading}
                            errorMessage={errorMessage}
                            data={data}
                            lang="en"
                            locationLabel="Guelph"
                            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                            showForecast
                        />}
                    </div>

                </div>
            </div>
        </div>

    );
}