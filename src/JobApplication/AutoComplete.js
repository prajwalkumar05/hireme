import React, { useState, useRef, useEffect, useCallback } from "react"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import TextField from "@mui/material/TextField"
import MenuList from "@mui/material/MenuList"
import MenuItem from "@mui/material/MenuItem"

import Select from '@mui/material/Select';


const AutoComplete = ({ options, handleChange, handleSelect, inputValue }) => {

  const listRef = useRef(null)
  const [isMatched, setMatched] = useState([])
  const [count, setCount] = useState(0)
  const [isOpen, setOpen] = useState(false)
  console.log(isMatched)

  // Use callback to avoid re-created on each render
  const findMatchs = useCallback(
    // Check first if there is a value then start to find matches
    // !! before inputValue will change it from string to 'true/false'
    () => !!inputValue && options.filter(item => item.toLowerCase().indexOf(inputValue.toLowerCase()) === 0),
    [inputValue, options]
  )

  useEffect(() => {
    // Call function to find matches
    setMatched(findMatchs)

    // Reset all state on component unmount
    return () => {
      setMatched([])
      setOpen(false)
      setCount(0)
    }
  }, [inputValue, findMatchs])

  // Handle keyup
  const handleKeyUp = ({ keyCode }) => {
    setOpen(true)
    // Handle arrow up and down
    switch (keyCode) {
      // Down arrow
      case 40:
        if (count < isMatched.length - 1) {
          setCount(prev => prev + 1)
          // Set focus to the first child in the list
          listRef.current && listRef.current.firstChild.focus()
        }
        break
      // Up arrow
      case 38:
        if (count > 0) {
          setCount(prev => prev - 1)
          // Set focus to the last child
          listRef.current && listRef.current.lastChild.focus()
        }
        break
      // Escape key
      case 27:
        setOpen(false)
        break

      default:
        break
    }
  }

  /* 
    - 'onClickAway' is an material ui listener to detect if a click event happened outside of an element
    - https://material-ui.com/components/click-away-listener/#click-away-listener
  */

  return (
    <>
      <TextField
        fullWidth
        autoComplete="off"
        label="Country"
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        type="search"
      />
      {!!inputValue && isOpen && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          {isMatched.length > 0 ? (
            <MenuList role="listbox" ref={listRef} >
              {isMatched.map(match => {
                // Just add "Bold" the the first char
                const suggest = match.toLowerCase().replace(inputValue, `<b>${inputValue}</b>`)
                return (
                  <MenuItem role="option" key={match} onClick={() => handleSelect(match)}>
                    <span dangerouslySetInnerHTML={{ __html: suggest }} />
                  </MenuItem>
                )
              })}
            </MenuList>
          ) : (
            <MenuList>
              <MenuItem>No options</MenuItem>
            </MenuList>
          )}
        </ClickAwayListener>
      )}
    </>
  )
}

export default AutoComplete


