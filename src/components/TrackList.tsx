import React from 'react';
import styled from "@emotion/styled";
import {Track, TrackProps} from "./Track";

const StyledTrackList = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px
`
type TrackListProps = {
    tracks: TrackProps[]

}
export const TrackList = ({
                              tracks
                          }: TrackListProps) => {
    return (
        <StyledTrackList>
            {tracks?.map(({cover, category, rating, title, price, duration, numberOfCourses, numberOfSales}) => <Track
                cover={cover} category={category} rating={rating} title={title} price={price} duration={duration}
                numberOfCourses={numberOfCourses} numberOfSales={numberOfSales}/>)}
        </StyledTrackList>
    );
};