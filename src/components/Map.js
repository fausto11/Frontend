import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect ,useRef} from 'react'
import MapView ,{ Marker, Polyline, DirectionsService}from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_KEY,PLACES_MAPS_API} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import { selectDestination, selectOrigin } from '../../slices/navSlices'


const Map = () => {
    const origin= useSelector(selectOrigin);
    const destination=useSelector(selectDestination)
    const mapRef=useRef(null);

    useEffect(() => {
        if (!origin || !destination || !mapRef.current) return;
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        });
    }, [origin, destination, mapRef]);

  return (
    <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType='mutedStandard'
        initialRegion={{
            latitude:origin.location.lat,
            longitude:origin.location.lng,
            latitudeDelta:0.005,
            longitudeDelta:0.005
        }}
    >   
        {origin && destination &&(
            <MapViewDirections
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_KEY}
                strokeWidth={3}
                strokeColor='black'
            ></MapViewDirections>
        )}
        {origin?.location &&(
            <Marker
                coordinate={{
                    latitude:origin.location.lat,
                    longitude:origin.location.lng,
                }}  
                title='Origin'
                description={origin.description}
                identifier='origin'
            ></Marker>  
        )}


        {destination?.location &&(
            <Marker
                coordinate={{
                    latitude:destination.location.lat,
                    longitude:destination.location.lng,
                }}  
                title='Destiantion'
                description={destination.description}
                identifier='destination'
            ></Marker>  
        )}

    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})