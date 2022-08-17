import React from 'react';
import styled from "@emotion/styled";
import {Teacher, TeacherProps} from "./Teacher";

const StyledTeacherList = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px
`
type TeacherListProps = {
    teachers: TeacherProps[]

}
export const TeacherList = ({
                              teachers
                          }: TeacherListProps) => {
    return (
        <StyledTeacherList>
            {teachers?.map(({cover, name, designation, description, course, }) => <Teacher
                cover={cover} name={name} designation={designation} description={description} course={course}/>)}
        </StyledTeacherList>
    );
};