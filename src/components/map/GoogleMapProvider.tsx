import {Wrapper} from "@googlemaps/react-wrapper"

export default function GoogleMapProvider({children}: {children: React.ReactNode}) {
    const key = AIzaSyB50bhEzzTuFo7p4VpWE_GpJgSkDLy3GIA;
    return (
        <Wrapper apiKey={AIzaSyB50bhEzzTuFo7p4VpWE_GpJgSkDLy3GIA}>
            {children}
        </Wrapper>
    );
}

