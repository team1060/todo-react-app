import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) => {
  // 사용자의 입력을 저정할 오브젝트
  const [item, setItem] = useState({ title: "" });
  const [isButtonVisible, setButtonVisibility] = useState(false);
  const addItem = props.addItem;

  // onDeleteButtonClick 함수 작성
  const onDeleteButtonClick = () => {
    setItem({ title: "" });
    setButtonVisibility(false);
  };

  // onButtonClick 함수 작성
  const onButtonClick = () => {
    // 실제로는 로그인중인 아이디
    if (item.title.trim() !== '') {
      addItem(item);
      setButtonVisibility(false);
      setItem({ title: "" });
    } else {
      alert('내용이 입력되지 않았습니다.')
    }
  };

  // onInputChange 함수 작성
  const onInputChange = (e) => {
    const inputValue = e.target.value;
    setItem({ title: inputValue });
    setButtonVisibility(inputValue.length !== 0);
    console.log(item);
  };

  // enterKeyEventHandler 함수
  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };


  // onInputChange 함수 TextField에 연결
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField placeholder="할 일을 입력하세요." fullWidth
          onChange={onInputChange}
          onKeyPress={enterKeyEventHandler}
          value={item.title}
          InputProps={{
            endAdornment: isButtonVisible && (
              <Button className="xbutton" style={{ height: "100%" }} onClick={onDeleteButtonClick} startIcon={<IoMdClose />}></Button>
            )

          }}
        />

      </Grid>
      <Grid xs={1} md={1} item >
        <Button fullWidth style={{ height: '100%' }} color="secondary" variant="outlined"
          onClick={onButtonClick}>
          +
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddTodo;