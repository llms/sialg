  function _dateStrToMDX(d, dimensionName, hideDimension, fullDate){
      var _fullDate = typeof fullDate === "undefined" ? true : fullDate;
      var _d = moment(d, "DD/MM/YYYY", "pt-br");
      var _dim = dimensionName ? dimensionName : "Data Emissao";
      var _dimension = hideDimension ? "" : "["+_dim+"].";
      var _completeStr = _dimension+"["+
              _d.format("YYYY", "pt-br")+   "].["+
              _removeDiacritics(_d.format("MMMM", "pt-br"))+   "].["+
              _d.format("D", "pt-br")+ "]";
      
      if(!_fullDate){
              
              var level = _getTimeType();
              switch(level){
                  case "um_ano":
                    _completeStr = _completeStr.substring(0, _completeStr.lastIndexOf("].[")+1); //retira dia
                    _completeStr = _completeStr.substring(0, _completeStr.lastIndexOf("].[")+1); //retira mes
                    break;
                  case "mes":
                    _completeStr = _completeStr.substring(0, _completeStr.lastIndexOf("].[")+1); //retira dia
                    break;
                  case "intervalo_meses":
                    _completeStr = _completeStr.substring(0, _completeStr.lastIndexOf("].[")+1); //retira dia
                    break;
                  default:
                    break;
              }
              
      }
      
      return _completeStr;
    }
