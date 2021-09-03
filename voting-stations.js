//good stations have at least 20 capacity
//stations can be schools or community centres

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations){
  let acceptableStations = [];
  for(const station of stations)
  {
    const capacity= station[1];
    const buildingType = station[2];

    if(capacity >= 20)
    {
      if(buildingType === "school" || buildingType === "community centre")
      {
        
        acceptableStations.push(station[0]);
      }
      
    }
    
    //To access the capacity we must access the index where the capacity is located which is index 1 in every instance of station.
  }
  return acceptableStations;

}
//good stations have at least 20 capacity
//stations can be schools or community centres




console.log(chooseStations(stations));