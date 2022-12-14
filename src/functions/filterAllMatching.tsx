export const FilterAllMatching = (data: any, finder: string) => {
  if (data) {
    const { launchesPast } = data;

    // filter method
    let res: any[] | undefined = [];
    res = launchesPast.filter((item: { mission_name: string | string[] }) =>
      item.mission_name.includes(finder)
    );

    // run console log
    //   console.log(`typeof launchesPast:  ${typeof launchesPast}`);
    // console.log(Object.keys(found).length);

    //result
    if (res === undefined || res.length === 0) {
      //   console.log(res.mission_name); //show undefined

      console.log(`RES IS UNDEFINED OR EMPTY`);
    } else {
      console.log(`RES IS POPULATED`);
      //   console.log(`typeof res:  ${typeof res}`);
      //   console.log(res);
      //   console.log(Object.keys(res).length);

      // var resArray = Object.keys(res).map((key) => [Number(key), res[key]]);
      // console.log(`typeof resArray:  ${typeof resArray}`);

      return res;
    }
  }

  // if (data && finder !== "") {
  //   data.map((item, key) => {
  //     return (
  //       <View>
  //         <TouchableOpacity key={key} style={{ paddingLeft: 16 }}>
  //           <Text>{item.mission_name}</Text>
  //         </TouchableOpacity>

  //         {/* <LocalModal item={item} /> */}
  //       </View>
  //     );
  //   });
  // } else {
  //   <View />;
  // }
};

export default FilterAllMatching;
