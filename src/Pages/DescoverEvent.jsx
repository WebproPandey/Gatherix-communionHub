import React, { useEffect, useState } from "react";

const DiscoverEvent = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      let parsedEvents = JSON.parse(storedEvents);

      // 🔹 Filter out expired events
      const today = new Date();
      const validEvents = parsedEvents.filter(event => {
        const eventEndDate = new Date(event.endDate);
        return eventEndDate >= today; // 🔹 Remove if event is expired
      });

      setEvents(validEvents);
      localStorage.setItem("events", JSON.stringify(validEvents)); // 🔹 Update storage
    }
  }, []);

  const filteredEvents = events.filter((event) => {
    const today = new Date();
    const eventStartDate = new Date(event.startDate);

    if (filter === "Today") {
      return eventStartDate.toDateString() === today.toDateString();
    } else if (filter === "Tomorrow") {
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      return eventStartDate.toDateString() === tomorrow.toDateString();
    } else if (filter === "This Week") {
      const weekEnd = new Date();
      weekEnd.setDate(today.getDate() + 7);
      return eventStartDate >= today && eventStartDate <= weekEnd;
    } else if (filter === "This Month") {
      return (
        eventStartDate.getMonth() === today.getMonth() &&
        eventStartDate.getFullYear() === today.getFullYear()
      );
    }
    return true;
  });

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 pt-[5vw]">
      <h2 className="text-2xl font-semibold mb-4">Discover Events</h2>

      {/* 🔹 Filter Buttons */}
      <div className="eventfilter w-full flex h-[10vh] justify-center items-center">
        <div className="w-[60%] flex gap-3 justify-center items-center">
          {["All", "Today", "Tomorrow", "This Week", "This Month"].map(
            (option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-full border-[1px] ${
                  filter === option ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                {option}
              </button>
            )
          )}
        </div>
      </div>

      {/* 🔹 Events Grid */}
      <div className="min-h-[50vh] w-full grid grid-cols-4 gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} className="border p-4 rounded-md shadow-md h-[70vh] flex flex-col justify-between">
              {event.image && (
                <img
                  src={event.image}
                  alt="Event"
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <h3 className="text-xl font-bold mt-3 capitalize">
                {event.eventName}
              </h3>
              <p className="text-gray-700">
                📍 <strong>Location:</strong> {event.location}
              </p>
              <p className="text-gray-700">
                🕒 <strong>Start:</strong> {event.startDate}
              </p>
              <p className="text-gray-700">
                🕒 <strong>End:</strong> {event.endDate}
              </p>
              <p className="text-gray-700 line-clamp-2">
                📝 <strong>Description:</strong> {event.description}
              </p>
              <div className="button px-4 py-2 bg-gray-600 text-center font-semibold rounded-md">
                Event Details
              </div>
            </div>
          ))
        ) : (
          <div className="w-[90vw]  pt-[4vw] ">
            <p className="text-[2vw]  text-center">No events available for "{filter}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverEvent;
