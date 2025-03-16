import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EventForm = () => {

  const { isSignedIn } = useUser();

    const [eventData, setEventData] = useState({
        eventName: "",
        eventFormat: "In Person",
        startDate: "2025-03-16T12:00",
        endDate: "2025-03-16T13:00",
        timezone: "GMT+5:30",
        location: "",
        eventType: "Free",
        capacity: "Unlimited",
        categories: [],
        description: "",
        image: null,
        visibility: "Anyone",
        hideRSVPs: false,
      });
    
      const categoriesList = [
        "Social & Community",
        "Network Meetup",
        "Social Gathering",
        "Community Service",
        "Professional",
        "Workshop",
        "Conference",
        "Volunteering & Charity",
        "Volunteering",
        "Charity",
      ];
    
      const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
      };
    
      const handleCategorySelect = (category) => {
        setEventData((prev) => ({
          ...prev,
          categories: prev.categories.includes(category)
            ? prev.categories.filter((cat) => cat !== category)
            : [...prev.categories, category],
        }));
      };
    
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setEventData({ ...eventData, image: reader.result });
          };
          reader.readAsDataURL(file);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();

        if (!isSignedIn) {
          toast.error("Please create an account to create an event.");
          return; 
        }

        let storedEvents = localStorage.getItem("events");
        let eventsArray = storedEvents ? JSON.parse(storedEvents) : [];
        eventsArray.push(eventData);
        localStorage.setItem("events", JSON.stringify(eventsArray));

        toast.success("Event Created and Saved Successfully!");
      };
  return (
    <div className="w-full px-[4vw] mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Create a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <label className="block">
          <span className="font-medium">Give your event a name*</span>
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Enter event name"
            required
          />
        </label>

        <label className="block">
          <span className="font-medium">Event Format*</span>
          <select
            name="eventFormat"
            value={eventData.eventFormat}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
          >
            <option value="In Person">In Person</option>
            <option value="Online">Online</option>
          </select>
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="font-medium">Start Date and Time*</span>
            <input
              type="datetime-local"
              name="startDate"
              value={eventData.startDate}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </label>
          <label className="block">
            <span className="font-medium">End Date and Time*</span>
            <input
              type="datetime-local"
              name="endDate"
              value={eventData.endDate}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </label>
        </div>

        <label className="block">
          <span className="font-medium">Timezone*</span>
          <input
            type="text"
            name="timezone"
            value={eventData.timezone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            disabled
          />
        </label>

        <label className="block">
          <span className="font-medium">Location*</span>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Search for a location in India"
          />
        </label>

        <label className="block">
          <span className="font-medium">Event Type*</span>
          <select
            name="eventType"
            value={eventData.eventType}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
          >
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
            <option value="Donation">Donation</option>
          </select>
        </label>

        <label className="block">
          <span className="font-medium">Event Capacity*</span>
          <select
            name="capacity"
            value={eventData.capacity}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
          >
            <option value="Unlimited">Unlimited</option>
            <option value="Limited">Limited</option>
          </select>
        </label>

        <fieldset className="block">
          <legend className="font-medium mb-2">Categories*</legend>
          <div className="grid grid-cols-2 gap-2">
            {categoriesList.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={eventData.categories.includes(category)}
                  onChange={() => handleCategorySelect(category)}
                  className="form-checkbox"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block">
          <span className="font-medium">Description*</span>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Describe your event... (max 1000 characters)"
            maxLength="1000"
            rows="4"
          />
        </label>

        <label className="block">
          <span className="font-medium">Upload Event Image*</span>
          <input type="file" onChange={handleImageUpload} className="mt-1" />
        </label>

        <label className="block">
          <span className="font-medium">Who can see this event?*</span>
          <select
            name="visibility"
            value={eventData.visibility}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Anyone">Anyone</option>
          </select>
        </label>

        <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md">
                Create Event
            </button>
      </form>
    </div>
  );
};

export default EventForm;
