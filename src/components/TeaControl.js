import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import TeaDetail from './TeaDetail';
import EditTeaForm from './EditTeaForm';


class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTeaList: [],
      selectedTea: null,
      editing: false
    };
  }

  handleSale = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    selectedTea.quantity = selectedTea.quantity - 1;
    this.setState({selectedTea: selectedTea});
  }
  
  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: selectedTea});
  }

  handleEditingTeaInList = (teaToEdit) => {
    const editedMainTeaList = this.state.mainTeaList
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(teaToEdit);
    this.setState({
        mainTeaList: editedMainTeaList,
        editing: false,
        selectedTea: null
      });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleDeletingTea = (id) => {
    const newMainTeaList = this.state.mainTeaList.filter(tea => tea.id !== id);
    this.setState({
      mainTeaList: newMainTeaList,
      selectedTea: null
    });
  }  

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false 
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({mainTeaList: newMainTeaList,
                  formVisibleOnPage: false });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing ) {      
      currentlyVisibleState = <EditTeaForm tea = {this.state.selectedTea} onEditTea = {this.handleEditingTeaInList} />
      buttonText = "Return to Tea List";
    } else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail 
        tea = {this.state.selectedTea} 
        onClickingDelete = {this.handleDeletingTea} 
        onClickingEdit = {this.handleEditClick} />

      buttonText = "Return to Tea List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList}  />;
      buttonText = "Return to Tea List";
    } else {
      currentlyVisibleState = <TeaList teaList={this.state.mainTeaList} onTeaSelection={this.handleChangingSelectedTea} onTeaSale={this.handleSale}/>;
      buttonText = "Add Tea";
    }
    return (
      <div className=' control bg-light p-5'>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }

}

export default TeaControl;