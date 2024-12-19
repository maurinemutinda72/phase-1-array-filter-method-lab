// Function 1: findMatching
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function 2: fuzzyMatch
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }
  
  // Function 3: matchName
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  
  // Example Usage
  const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
  const driverObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "Boston" },
    { name: "Annette", hometown: "New York" },
    { name: "Sarah", hometown: "Los Angeles" },
    { name: "Bobby", hometown: "Boston" },
  ];
  
  console.log(findMatching(drivers, "Bobby"));
  // Output: ["Bobby", "Bobby"]
  
  console.log(fuzzyMatch(drivers, "Sa"));
  // Output: ["Sammy", "Sally", "Sarah"]
  
  console.log(matchName(driverObjects, "Bobby"));
  // Output: [{ name: "Bobby", hometown: "New York" }, { name: "Bobby", hometown: "Boston" }]
  