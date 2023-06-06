
import PropTypes from "prop-types";

import { ImLocation } from 'react-icons/im';
import { BsFilePerson } from 'react-icons/bs';
import { GiSandsOfTime, GiDuration } from 'react-icons/gi';

// import formatEventStart from "../utils/formatEventStart";
// import formatEventDuration from "../utils/formatEventDuration"
import { formatEventStart, formatEventDuration } from '../utils';

import { iconSize } from "../constants";

import { Card, EventName, Info, Chip } from "./Event.styled";

export const Event = ({name,location, speaker, type, start, end }) => {
  const formatedStartTime = formatEventStart(start)
  const formatedTimeDuration = formatEventDuration(start,end )
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <ImLocation size={iconSize.sm}/>
        {location}
      </Info>
      <Info>
        <BsFilePerson size={iconSize.sm}/>
        {speaker}
      </Info>
      <Info>
        <GiSandsOfTime size={iconSize.sm}/>
        {formatedStartTime}
      </Info>
      <Info>
        <GiDuration size={iconSize.sm} />
        {formatedTimeDuration}
      </Info>

      <Chip eventType={type}>{type}</Chip>

    </Card>
    
  );
}


Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
}

