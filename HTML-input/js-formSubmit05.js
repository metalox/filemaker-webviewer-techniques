<!-- note: html comments,  below, will be substituted when running the script to set the webviewer content -->
 
<div class="btncontainertop">
    <button type="button" id="cancelbtn" class="centerh" onclick="cancel()">Cancel</button>
  </div>
  <div id="example"></div>
  <h1 class="txtcenter">Pets & their people survey</h1>

  <form id="form1">

    <fieldset>
  
    <legend>People & Pets</legend>

      <input type="hidden" id="id_people" name="id_people" value = "<!--id_people-->">
      <input type="hidden" id="hashbefore" name="hashbefore" value = "<!--hashBefore-->">
      <input type="hidden" id="newRecord" name="newRecord" value = "<!--newRecord-->">

      <label for="nameFirst" class="pale">First name*:</label><br>
      <input type="text" id="nameFirst" name="nameFirst" value="<!--nameFirst-->" autofocus required><br>
  
      <label for="nameLast" class="pale">Last name*:</label><br>
      <input type="text" id="nameLast" name="nameLast" value="<!--nameLast-->" required><br>
  
    <!--animalsSelect-->
  
      <label for="petName" class="pale">Pet Name:</label><br>
      <input type="text" id="petName" name="petName" value="<!--petName-->"><br>
   
    <!--prefsCheckbox-->
  
      <textarea name="notes" id="notes" rows="10" cols="30" placeholder="notes..."><!--notes--></textarea><br>

      <div class="btncontainerbtm">
        <button type="submit" id="submitbtn">OK</button>
        <button type="button" onclick="helloWorld()">Hello...</button>
        <button type="reset" form="form1">Reset</button>
      </div>
     
    </fieldset>
  </form>
  <script src="js-test-form2-script-ie.js"></script>