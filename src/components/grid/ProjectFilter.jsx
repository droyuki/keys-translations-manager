/* eslint-disable react/prop-types */
import React from 'react';
import localeUtil from 'keys-translations-manager-core/lib/localeUtil'
import Select from 'react-select';
import configUtil from '../../configUtil'


const projects = configUtil.getProjects();

const ProjectFilter = (props) => {
  const options = projects.map(({id, name}) => ({
    label: name,
    value: id,
  }))

  return (
    <Select
      id="project-filter"
      options={options}
      selectedValues={props.selectedValues}
      onChange={props.onChange}
      styles={{
        control: (style, d) => ({
            ...style,
            "&:hover": {
              ...style["&:hover"],
              borderColor: "#fdb91a",
            },
            boxShadow: "#fdb91a",
            borderColor: d.isFocused ? "#fdb91a" : "#ccc",
            marginBottom: 2,
        }),
        option: (style, d) => ({
          ...style,
          backgroundColor: d.isFocused ? "#fdd11a" : undefined,
          ":active": {
            ...style[":active"],
            backgroundColor: "#fdd11a",
          },
        }),
        menu: (style) => ({
          ...style,
          zIndex: 3,
          marginTop: "0px",
        }),
        multiValue: (style) => ({
          ...style,
          backgroundColor: "#fdd11a",
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          ":hover": {
            backgroundColor: "#fdb91a",
            color: "white",
          },
        }),
      }}
      placeholder={localeUtil.getMsg("ui.grid.projectFilter")}
      isMulti
    />
  );
};

export default ProjectFilter;